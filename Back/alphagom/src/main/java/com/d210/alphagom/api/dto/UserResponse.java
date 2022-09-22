package com.d210.alphagom.api.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserResponse {

    private String name;

    public UserResponse(String name) {
        this.name = name;
    }
}
