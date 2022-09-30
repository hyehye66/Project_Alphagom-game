package com.d210.alphagom.domain.repository;

import com.d210.alphagom.domain.entity.GameStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameStatusRepository extends JpaRepository<GameStatus, Long> {
}
