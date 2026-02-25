import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const events = [
  { id: 1, title: "Научная конференция", date: "15 марта 2026", location: "Аудитория 301", participants: 45 },
  { id: 2, title: "Спортивный турнир", date: "20 марта 2026", location: "Спортзал", participants: 120 },
  { id: 3, title: "Культурный вечер", date: "25 марта 2026", location: "Актовый зал", participants: 80 },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Мероприятия</h1>
          <p className="text-muted-foreground mt-1">Список внеучебных мероприятий</p>
        </div>
        <Link to="/login">
          <Button variant="outline">Войти</Button>
        </Link>
      </div>
      <div className="grid gap-4">
        {events.map((e) => (
          <Card key={e.id} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{e.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {e.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {e.location}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {e.participants} участников
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  </div>
);

export default Index;
