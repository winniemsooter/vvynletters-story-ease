import newProfileImage from "@/assets/winifred-new-profile.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-center mb-16">
            The Mind Behind <span className="text-primary">VVYNLETTERS</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img
                  src={newProfileImage}
                  alt="Winifred Liam - Storytelling Consultant and PsyD Professional"
                  className="w-full h-[500px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <p className="text-xl font-avenir text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-playfair text-2xl">Winifred Liam</strong> is a storyteller and communications strategist with over five years' experience transforming complex ideas into narratives that inspire action. Her career bridges applied psychology, humanitarian service, and brand communications — from coordinating child protection programs in Nigeria to amplifying creative voices through international arts journalism and shaping brand narratives for global fashion houses.
              </p>
              
              <p className="text-xl font-avenir text-muted-foreground leading-relaxed">
                Currently pursuing a BSc in Applied Psychology and on the path to a PsyD, she explores how storytelling can serve as micro–mental health support: everyday practices that ease stress, untangle thoughts, and foster clarity. Through VVYNLETTERS, Winifred unites her expertise in story and psychology to offer courses, consulting, and reflections that help people write their way into ease and growth.
              </p>
              
              <p className="text-xl font-avenir text-muted-foreground leading-relaxed">
                Her work creativity and strategy meet to bring ease to people who often operate in overdrive — scholars, founders, and creatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};