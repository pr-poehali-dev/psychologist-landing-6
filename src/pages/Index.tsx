import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Я свяжусь с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-foreground">Валерия Паршкова</h2>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-foreground transition-colors">
              Обо мне
            </button>
            <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection("education")} className="text-muted-foreground hover:text-foreground transition-colors">
              Образование
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Паршкова Валерия
              </h1>
              <p className="text-xl text-muted-foreground">
                Психолог • ACT-терапевт
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Помогаю справиться с тревожностью, депрессией и выстроить здоровые отношения с собой и окружающими
              </p>
              <Button
                onClick={() => scrollToSection("booking")}
                size="lg"
                className="bg-primary hover:bg-accent text-primary-foreground transition-all"
              >
                Записаться на консультацию
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/39829934-52d7-46f8-9d24-852cc9e18678/files/74979cfb-1f6a-4189-af55-f1947b3d37e0.jpg"
                  alt="Паршкова Валерия"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Обо мне</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Я практикующий психолог с образованием магистра психологии МПГУ и специализацией в ACT-терапии (терапия принятия и ответственности).
            </p>
            <p>
              В своей работе я создаю безопасное пространство, где вы можете быть собой и исследовать свои переживания без страха осуждения. Моя задача — помочь вам найти внутренние ресурсы для преодоления трудностей и построения жизни, наполненной смыслом.
            </p>
            <p>
              Я верю, что каждый человек обладает способностью к изменениям, и моя роль — поддержать вас на этом пути.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">С чем я работаю</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "Heart",
                title: "Тревожность",
                description: "Помогу справиться с постоянным беспокойством, паническими атаками и навязчивыми мыслями",
              },
              {
                icon: "Cloud",
                title: "Депрессия",
                description: "Поддержу в период уныния, потери интереса к жизни и поиске смысла",
              },
              {
                icon: "Star",
                title: "Низкая самооценка",
                description: "Работаем над принятием себя, уверенностью и внутренней опорой",
              },
              {
                icon: "Shield",
                title: "Абьюзивные отношения",
                description: "Помогу распознать токсичные паттерны и выстроить здоровые границы",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border animate-fade-in">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Образование и квалификация</h2>
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="GraduationCap" size={28} className="text-primary-foreground" />
                  Магистр психологии
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Московский педагогический государственный университет (МПГУ)
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Award" size={28} className="text-primary-foreground" />
                  ACT-терапевт
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Специализация в терапии принятия и ответственности (Acceptance and Commitment Therapy)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Запись на консультацию</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте ваши контакты, и я свяжусь с вами в ближайшее время
          </p>
          <Card className="border-border shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Как к вам обращаться?"
                    required
                    className="border-border"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Телефон или Telegram
                  </label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Сообщение (необязательно)
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите кратко, с чем бы хотели поработать"
                    rows={4}
                    className="border-border"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Контакты</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-lg">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Mail" size={24} className="text-primary-foreground" />
              <span className="text-muted-foreground">valeria.parshkova@example.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Phone" size={24} className="text-primary-foreground" />
              <span className="text-muted-foreground">+7 (900) 000-00-00</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Паршкова Валерия. Психологическая помощь</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
