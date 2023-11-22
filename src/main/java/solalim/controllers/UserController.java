package solalim.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import solalim.model.DBUser;
import solalim.repository.UserRepository;
import solalim.configuration.CustomUserDetailsService;



@Controller
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomUserDetailsService customUserDetailsService;

    @Autowired
    public UserController(UserRepository userRepository, PasswordEncoder passwordEncoder, CustomUserDetailsService customUserDetailsService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.customUserDetailsService = customUserDetailsService;
    }

    @GetMapping("/inscription")
    public String showUserForm(DBUser user,Model model) {
//        user.setAdresseMail("a@a.a");user.setNom("a");user.setCodePostal("12345");user.setPassword("12345678X");user.setPrenom("a");user.setVille("az");user.setAdresse("a");
        model.addAttribute("user", user);
        return "inscription";
    }

    @GetMapping("/monCompte")
    public String showUserProfile(Model model) {
        DBUser user = getCurrentUser();
        model.addAttribute("user", user);
        return "monCompte";
    }

    @GetMapping("/accueil")
    public String showHome(Model model) {
        DBUser user = getCurrentUser();
        model.addAttribute("user", user);
        return "accueil";
    }

    @GetMapping("/reseaux")
    public String reseaux(Model model) {
        DBUser user = getCurrentUser();
        model.addAttribute("user", user);
        return "reseaux";
    }

    @GetMapping("/motDePasse")
    public String password(Model model) {
        DBUser user = getCurrentUser();
        model.addAttribute("user", user);
        return "motDePasse";
    }

    @GetMapping("/LesCommandes")
    public String LesCommandes(Model model) {
        DBUser user = getCurrentUser();
        model.addAttribute("user", user);
        return "LesCommandes";
    }

    @GetMapping("/Commandes")
    public String Commandes(Model model) {
        DBUser user = getCurrentUser();
        model.addAttribute("user", user);
        return "Commandes";
    }

    @GetMapping("/CommandesEnCours")
    public String CommandesEnCours(Model model) {
        DBUser user = getCurrentUser();
        model.addAttribute("user", user);
        return "CommandesEnCours";
    }

    @GetMapping("/CommandesPassees")
    public String CommandesPassees(Model model) {
        DBUser user = getCurrentUser();
        model.addAttribute("user", user);
        return "CommandesPassees";
    }

    @GetMapping("/mesCommandesEnCours")
    public String mesCommandesEnCours(Model model) {
        DBUser user = getCurrentUser();
        model.addAttribute("user", user);
        return "mesCommandesEnCours";
    }

    @GetMapping("/desinscription")
    public String desinscription(Model model) {
        DBUser user = getCurrentUser();
        model.addAttribute("user", user);
        return "desinscription";
    }

    @PostMapping("/inscription")
    public String submitUserForm(DBUser user, RedirectAttributes redirectAttributes) {
        boolean duplicateEmail = userRepository.existsByAdresseMail(user.getAdresseMail());
        boolean duplicatePhoneNumber = userRepository.existsByNumeroTelephone(user.getNumeroTelephone());

        if (duplicateEmail) {
            redirectAttributes.addFlashAttribute("errorDuplicateEmail", true);
        }

        if (duplicatePhoneNumber) {
            System.out.println("le numero existe");
            redirectAttributes.addFlashAttribute("errorDuplicatePhoneNumber", true);
        }

        if (duplicateEmail || duplicatePhoneNumber) {
            return "redirect:/inscription";
        }


        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);

        user.setRole("USER");

        userRepository.save(user);

        customUserDetailsService.loadUserByUsername(user.getAdresseMail());

        return "redirect:/inscription?success=true";
    }

    @PostMapping("/motDePasse")
    public String changePassword(@RequestParam("currentPassword") String currentPassword,
                                 @RequestParam("newPassword") String newPassword,
                                 @RequestParam("confirmPassword") String confirmPassword,
                                 Model model) {
        DBUser user = getCurrentUser();

        if ((currentPassword == null || currentPassword.isEmpty()) ||
                (newPassword == null || newPassword.isEmpty()) ||
                (confirmPassword == null || confirmPassword.isEmpty())) {
            model.addAttribute("errorEmptyField", true);
            return "motDePasse";
        }

        if (!passwordEncoder.matches(currentPassword, user.getPassword())) {
            model.addAttribute("errorCurrentPassword", true);
            return "motDePasse";
        }

        if (passwordEncoder.matches(newPassword, user.getPassword())) {
            model.addAttribute("errorSamePassword", true);
            return "motDePasse";
        }

        if (!newPassword.equals(confirmPassword)) {
            model.addAttribute("errorConfirmPassword", true);
            return "motDePasse";
        }

        String hashedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(hashedPassword);
        userRepository.save(user);

        return "redirect:/motDePasse?success=true";
    }

    @PostMapping("/desinscription")
    public String unsubscribeUser(@RequestParam("password") String password, Model model, RedirectAttributes redirectAttributes) {
        DBUser user = getCurrentUser();

        if (password == null || password.trim().isEmpty()) {;
            return "redirect:/desinscription?success=false";
        }
        if (!passwordEncoder.matches(password, user.getPassword())) {
            return "redirect:/desinscription?success=Error";
        }
        userRepository.delete(user);
        System.out.println("le user est effacé de la bdd");

        return "redirect:/desinscription?success=true";
    }
    private DBUser getCurrentUser() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = "";
        if (authentication != null && authentication.getPrincipal() instanceof UserDetails) {
            email = ((UserDetails) authentication.getPrincipal()).getUsername();
        }

        System.out.println("Email used to find user: " + email);

        DBUser user = userRepository.findByAdresseMail(email);

        if (user != null) {
            System.out.println("User found: " + user.getPrenom());
        } else {
            System.out.println("User not found for email: " + email);
        }

        return user;
    }

}