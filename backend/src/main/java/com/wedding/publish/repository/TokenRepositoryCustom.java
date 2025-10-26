package com.wedding.publish.repository;

import com.wedding.publish.model.Tokens;

import java.util.List;

public interface TokenRepositoryCustom {
    List<Tokens> findAllValidTokenByUserId(String username);
}
