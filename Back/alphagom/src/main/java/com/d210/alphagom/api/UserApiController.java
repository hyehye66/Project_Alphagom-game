package com.d210.alphagom.api;

import com.d210.alphagom.api.dto.UserResponse;
import com.d210.alphagom.domain.entity.User;
import com.d210.alphagom.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/be")
@RequiredArgsConstructor
public class UserApiController {

    private final UserService userService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<UserResponse> getUserInfo(@PathVariable Long userId) {

        log.info("{}번 유저 정보 조회", userId);
        User user = userService.findUser(userId);
        return ResponseEntity.ok(new UserResponse(user.getName()));
    }
}
