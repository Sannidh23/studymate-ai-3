
npm install react react-dom next tailwindcss postcss autoprefixer @radix-ui/react-avatar @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-scroll-area @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-tabs class-variance-authority clsx tailwind-variants lucide-react



import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, MessageCircle, Target, TrendingUp, Sparkles } from "lucide-react";
import StudyChat from "@/components/StudyChat";
import StudySession from "@/components/StudySession";
import heroImage from "@/assets/hero-study.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "study" | "progress">("chat");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">StudyMate AI</h1>
              <p className="text-sm text-muted-foreground">Your AI-powered study companion</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-accent-soft text-accent-foreground">
            <Sparkles className="w-3 h-3 mr-1" />
            AI Powered
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="border-accent text-accent">
                Powered by OpenAI
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transform Your
                <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                  Study Experience
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get personalized AI assistance, generate practice questions, and track your learning progress with advanced AI technology.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => setActiveTab("chat")}
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-elegant transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Studying
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab("study")}
                  className="border-accent text-accent hover:bg-accent-soft"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Study Sessions
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern study workspace with books and laptop"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center shadow-accent">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="bg-card border border-border rounded-xl p-1 shadow-elegant">
            <div className="flex gap-1">
              <Button
                variant={activeTab === "chat" ? "default" : "ghost"}
                onClick={() => setActiveTab("chat")}
                className={activeTab === "chat" ? "bg-primary text-primary-foreground shadow-sm" : ""}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                AI Chat
              </Button>
              <Button
                variant={activeTab === "study" ? "default" : "ghost"}
                onClick={() => setActiveTab("study")}
                className={activeTab === "study" ? "bg-primary text-primary-foreground shadow-sm" : ""}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Study Session
              </Button>
              <Button
                variant={activeTab === "progress" ? "default" : "ghost"}
                onClick={() => setActiveTab("progress")}
                className={activeTab === "progress" ? "bg-primary text-primary-foreground shadow-sm" : ""}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Progress
              </Button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "chat" && <StudyChat />}
          {activeTab === "study" && <StudySession />}
          {activeTab === "progress" && (
            <Card className="shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Study Progress
                </CardTitle>
                <CardDescription>
                  Track your learning journey and achievements
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center py-12">
                <div className="w-16 h-16 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <p className="text-muted-foreground">
                  Progress tracking coming soon! Start studying to build your learning analytics.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Powered by Advanced AI
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the future of personalized learning with cutting-edge AI technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-card to-accent-soft/20">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-primary">AI Study Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get instant help with complex topics, explanations, and personalized study guidance
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-card to-accent-soft/20">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-primary">Smart Study Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Generate practice questions, flashcards, and structured study plans tailored to you
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-card to-accent-soft/20">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-glow to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-primary">Progress Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Track your learning progress and identify areas for improvement with detailed insights
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;