package br.edu.senai.artwar.controller;

import br.edu.senai.artwar.JWTUtil;
import br.edu.senai.artwar.model.Credentials;
import br.edu.senai.artwar.model.Jogador;
import br.edu.senai.artwar.model.JogadorLogado;
import br.edu.senai.artwar.model.LogAcesso;
import br.edu.senai.artwar.repository.JogadorRep;
import br.edu.senai.artwar.repository.LoginRep;
import java.util.Calendar;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LoginController {

    private void geraLog(Jogador j) {
        LoginRep lrep = new LoginRep();
        
        Calendar c = Calendar.getInstance();
        String data = c.get(Calendar.DAY_OF_MONTH) + "/" + c.get(Calendar.MONTH) + "/" +
                c.get(Calendar.YEAR) + " " + c.get(Calendar.HOUR_OF_DAY) + ":" +
                c.get(Calendar.MINUTE) + ":" + c.get(Calendar.SECOND);
        
        LogAcesso la = new LogAcesso(j.getNome(), j.getLogin(), data);
        lrep.salvar(la);
    }
    
    @POST
    @Path("/login")
    public Response login(Credentials credentials) {
        Jogador jogador = JogadorRep.logar(credentials.getUsername(), credentials.getPassword());
        
        if(jogador != null){
            String token = JWTUtil.create(String.valueOf(jogador.getId()));
            JogadorLogado me = new JogadorLogado();
            me.setUsername(credentials.getUsername());
            me.setToken(token);
            me.setPerfil(jogador.getPerfil());
            me.setId(jogador.getId());
            geraLog(jogador);
            return Response.ok().entity(me).build();
        }else{
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
    }
}