package br.edu.senai.artwar;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTUtil {
     private static final String KEY = "CHALLENGE2018BNU";

    public static final String TOKEN_HEADER = "Authorization";

    public static String create(String subject) {

        return Jwts.builder()
                .setSubject(subject)
                .signWith(SignatureAlgorithm.HS512, KEY)
                .compact();
    }

    public static Jws<Claims> decode(String token){
        return Jwts.parser().setSigningKey(KEY).parseClaimsJws(token);
    }
}
