const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="bg-card border border-border rounded-xl p-8 shadow-card">
          <p className="text-lg text-muted-foreground mb-6">
            I'm a passionate full-stack developer with 5+ years of experience building web applications. 
            I love creating efficient, scalable, and user-friendly solutions that solve real-world problems.
          </p>
          
          <p className="text-lg text-muted-foreground mb-6">
            My journey in software development started with a curiosity about how things work on the web, 
            and has evolved into a career where I get to work with cutting-edge technologies and solve 
            complex challenges every day.
          </p>
          
          <p className="text-lg text-muted-foreground">
            When I'm not coding, you can find me contributing to open-source projects, writing technical 
            blog posts, or exploring new technologies and frameworks.
          </p>
          
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-4">What I Do</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Full-Stack Web Development",
                "RESTful API Design",
                "Database Architecture",
                "Cloud Deployment & DevOps",
                "Mobile App Development",
                "UI/UX Implementation"
              ].map((item) => (
                <li key={item} className="flex items-center text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
