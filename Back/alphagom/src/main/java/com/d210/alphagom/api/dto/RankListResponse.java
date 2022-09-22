package com.d210.alphagom.api.dto;

import com.d210.alphagom.domain.entity.GameTag;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RankListResponse {

    private Long id;

    private LocalDateTime createdDate;

    private int status;

    private GameTag gameTag;
}
