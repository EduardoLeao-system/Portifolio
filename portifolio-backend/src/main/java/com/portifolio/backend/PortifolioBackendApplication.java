package com.portifolio.backend;

import com.portifolio.backend.model.Projeto;
import com.portifolio.backend.repository.ProjetoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class PortifolioBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortifolioBackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner init(ProjetoRepository projetoRepository) {
		return args -> {
			projetoRepository.deleteAll();
			projetoRepository.saveAll(Arrays.asList(
					new Projeto("Portfolio Angular + Spring Boot", "Portfólio full stack moderno com design responsivo e integração completa entre frontend e backend.", Arrays.asList("Angular", "TypeScript", "Spring Boot", "Java", "Tailwind CSS"), "https://github.com/EduardoLeao-system/portifolio", ""),
					new Projeto("Sistema de Gerenciamento", "Sistema completo para gerenciamento de usuários com autenticação JWT e dashboard administrativo.", Arrays.asList("Angular", "Spring Security", "MySQL", "Bootstrap"), "https://github.com/EduardoLeao-system/management-system", ""),
					new Projeto("E-commerce API", "API RESTful para e-commerce com carrinho de compras, pagamentos e gestão de produtos.", Arrays.asList("Spring Boot", "JPA", "PostgreSQL", "Docker"), "https://github.com/EduardoLeao-system/ecommerce-api", "")
			));
		};
	}
}
