package com.d210.alphagom.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "user")
public class User extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    private String nickname;

    private LocalDate birth;

    public User(Long id, String name, String email, String nickname, LocalDate birth) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.nickname = nickname;
        this.birth = birth;
    }
}
