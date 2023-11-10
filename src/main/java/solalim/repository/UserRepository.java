package solalim.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import solalim.model.DBUser;

public interface UserRepository extends JpaRepository<DBUser, Long> {
    boolean existsByAdresseMail(String adresseMail);

    boolean existsByNumeroTelephone(String numeroTelephone);
    DBUser findByAdresseMail(String adresseMail);

}
