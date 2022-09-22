package com.d210.alphagom.domain.service;

import com.d210.alphagom.domain.entity.GameStatus;
import com.d210.alphagom.domain.entity.GameTag;
import com.d210.alphagom.domain.entity.User;
import com.d210.alphagom.domain.repository.GameStatusRepository;
import com.d210.alphagom.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class GameStatusService {

    private final GameStatusRepository gameStatusRepository;

    // 점수 저장
    @Transactional
    public Long saveScore(int score, GameTag tag, User user) {

        GameStatus gameStatus = gameStatusRepository.save(new GameStatus(score, tag, user));
        return gameStatus.getId();
    }

    public List<GameStatus> findAllUserGameStatus(Long userId) {

        List<GameStatus> list = gameStatusRepository.getGameStatusesByUserId(userId);
        return list;
    }

}
