package solalim.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
class LoginController {
    @GetMapping("/login")
    String login() {
        return "connexion";
    }
    @GetMapping("/mentions-legales")
    String mentions() {
        return "mentions-legales";
    }

}


