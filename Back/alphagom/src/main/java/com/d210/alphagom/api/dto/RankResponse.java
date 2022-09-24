package com.d210.alphagom.api.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RankResponse {

    private String gameTag;

    private String nickName;

    private int score;

    private Long rank;

    public RankResponse(String gameTag, String nickName, int score) {
        this.gameTag = gameTag;
        this.nickName = nickName;
        this.score = score;
    }

    public RankResponse(String gameTag, String nickName, int score, Long rank) {
        this.gameTag = gameTag;
        this.nickName = nickName;
        this.score = score;
        this.rank = rank;
    }
}
