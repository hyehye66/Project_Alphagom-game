package com.d210.alphagom.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {
    @GetMapping("/")
    private ResponseEntity test() {
        return ResponseEntity.ok().body(LocalDate.now());
    }
}
