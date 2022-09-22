package com.d210.alphagom.domain.repository;

import com.d210.alphagom.domain.entity.GameStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GameStatusRepository extends JpaRepository<GameStatus, Long> {

    @Query("select g from GameStatus g join fetch g.user u where u.id = :userId")
    List<GameStatus> getGameStatusesByUserId(@Param("userId") Long userId);
}
