package com.portifolio.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "projetos")
public class Projeto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(length = 1000)
    private String description;
    
    @ElementCollection
    @CollectionTable(name = "projeto_tech_stack", joinColumns = @JoinColumn(name = "projeto_id"))
    @Column(name = "tech")
    private List<String> techStack;
    
    @Column(name = "github_url")
    private String githubUrl;
    
    @Column(name = "live_demo_url")
    private String liveDemoUrl;
    
    // Constructors
    public Projeto() {}
    
    public Projeto(String title, String description, List<String> techStack, String githubUrl, String liveDemoUrl) {
        this.title = title;
        this.description = description;
        this.techStack = techStack;
        this.githubUrl = githubUrl;
        this.liveDemoUrl = liveDemoUrl;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public List<String> getTechStack() { return techStack; }
    public void setTechStack(List<String> techStack) { this.techStack = techStack; }
    
    public String getGithubUrl() { return githubUrl; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }
    
    public String getLiveDemoUrl() { return liveDemoUrl; }
    public void setLiveDemoUrl(String liveDemoUrl) { this.liveDemoUrl = liveDemoUrl; }
}