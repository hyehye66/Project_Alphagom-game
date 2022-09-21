package com.d210.alphagom.domain.repository;

import com.d210.alphagom.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
