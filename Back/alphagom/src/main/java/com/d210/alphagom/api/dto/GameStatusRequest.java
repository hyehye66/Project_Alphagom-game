package com.d210.alphagom.api.dto;

import com.d210.alphagom.domain.entity.GameTag;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GameStatusRequest {

    private int score;

    private GameTag gameTag;

}
