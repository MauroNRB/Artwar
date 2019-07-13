package br.edu.senai.artwar.controller;

import br.edu.senai.artwar.model.Jogador;
import br.edu.senai.artwar.repository.JogadorRep;
import java.util.Random;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.simplejavamail.email.Email;
import org.simplejavamail.email.EmailBuilder;
import org.simplejavamail.mailer.Mailer;
import org.simplejavamail.mailer.MailerBuilder;
import org.simplejavamail.mailer.config.TransportStrategy;

@Path("/senha")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class EmailController {

    @POST
    public Response enviarSenha(Jogador jogador) {

        JogadorRep jrep = new JogadorRep();
        Jogador j = jrep.buscarPorEmail(jogador.getEmail());

        if (j != null) {
            String senha = geraSenha();
            j.setSenha(senha);
            jrep.salvar(j);

            Email email = EmailBuilder.startingBlank()
                    .from("email challenge", "jogoartwar@gmail.com")
                    .to("pessoa que esqueceu a senha", jogador.getEmail())
                    .withSubject("Nova senha gerada")
                    .withPlainText("Sua nova senha é: " + senha)
                    .buildEmail();

            Mailer mailer = MailerBuilder
                    .withSMTPServer("smtp.gmail.com", 587, "jogoartwar@gmail.com", "senha")
                    .withTransportStrategy(TransportStrategy.SMTP_TLS)
                    .withSessionTimeout(10 * 1000)
                    .clearEmailAddressCriteria()
                    .withDebugLogging(true)
                    .buildMailer();

            mailer.sendMail(email);
            return Response.status(200).entity("senha enviada com sucesso!!").build();
        } else {
            return Response.status(500).entity("Não existe jogador cadastrado com esse email!!").build();
        }
    }

    private String geraSenha() {
        int leftLimit = 97; // letter 'a'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();
        StringBuilder buffer = new StringBuilder(targetStringLength);
        for (int i = 0; i < targetStringLength; i++) {
            int randomLimitedInt = leftLimit + (int) (random.nextFloat() * (rightLimit - leftLimit + 1));
            buffer.append((char) randomLimitedInt);
        }
        String generatedString = buffer.toString();

        return generatedString;
    }
}
