import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Braces,
  Code,
  Compass,
  Cpu,
  FileCode2,
  Layers,
  Rocket,
  Workflow
} from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
};

export type SummaryCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type Feature = {
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
};

export type GrammarSection = {
  title: string;
  grammar: string;
};

export type CodeExample = {
  title: string;
  description: string;
  code: string;
};

export type CompilerStage = {
  stage: string;
  detail: string;
};

export const site = {
  title: "JLite Programming Language",
  subtitle:
    "A simplified Java-inspired language for teaching compiler and language design concepts",
  year: new Date().getFullYear()
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/grammar", label: "Grammar" },
  { href: "/code-examples", label: "Code Examples" },
  { href: "/compiler-flow", label: "Compiler Flow" },
  { href: "/documentation", label: "Documentation" },
  { href: "/project-info", label: "Project Info" }
];

export const overviewCards: SummaryCard[] = [
  {
    title: "Language Features",
    description: "Browse the core language constructs and design decisions.",
    href: "/features",
    icon: Rocket
  },
  {
    title: "BNF Grammar",
    description: "Read syntax production rules in a parser-friendly format.",
    href: "/grammar",
    icon: Braces
  },
  {
    title: "Compiler Flow",
    description: "Understand the journey from source code to execution.",
    href: "/compiler-flow",
    icon: Workflow
  },
  {
    title: "Example Code",
    description: "Study practical JLite examples with concise explanations.",
    href: "/code-examples",
    icon: Code
  }
];

export const aboutPoints = [
  "JLite is a simplified Java-inspired language created for teaching programming language design and compiler construction.",
  "It keeps class-based programming concepts while reducing syntax complexity to help beginners focus on fundamentals.",
  "Target users include students, first-time programmers, and compiler design learners who need a readable learning language."
];

export const designObjectives = [
  "Simple syntax",
  "Class-based design",
  "Beginner-friendly structure",
  "Easy grammar for parsing"
];

export const features: Feature[] = [
  {
    title: "Class-Based Structure",
    description: "Programs are organized using familiar class declarations.",
    badge: "class",
    icon: Layers
  },
  {
    title: "Variable Declarations",
    description: "Typed variables support predictable static analysis.",
    badge: "int | string | bool",
    icon: FileCode2
  },
  {
    title: "Methods With func",
    description: "Method definitions use an explicit and readable func keyword.",
    badge: "func",
    icon: Compass
  },
  {
    title: "Print Statements",
    description: "Simple output for learning control flow and evaluation.",
    badge: "print(expr)",
    icon: BookOpen
  },
  {
    title: "If Statements",
    description: "Conditional branching with clear block syntax.",
    badge: "if",
    icon: Cpu
  },
  {
    title: "While Loops",
    description: "Iteration support for algorithmic thinking.",
    badge: "while",
    icon: Workflow
  },
  {
    title: "Simple Expressions",
    description: "Arithmetic and relational expressions for core logic.",
    badge: "+, -, >, ==",
    icon: Braces
  },
  {
    title: "Assignment Statements",
    description: "Direct state updates through readable assignment syntax.",
    badge: "identifier = expr;",
    icon: Code
  }
];

export const grammarSections: GrammarSection[] = [
  {
    title: "Program",
    grammar: `<program> ::= <class_decl>`
  },
  {
    title: "Class Declaration",
    grammar: `<class_decl> ::= "class" <identifier> "{" <decl_list> "}"\n<decl_list> ::= <decl> | <decl> <decl_list>\n<decl> ::= <var_decl> | <method_decl>`
  },
  {
    title: "Variable Declaration",
    grammar: `<var_decl> ::= <type> <identifier> ";"\n<type> ::= "int" | "string" | "bool"`
  },
  {
    title: "Method Declaration",
    grammar: `<method_decl> ::= "func" <identifier> "(" <param_list> ")" "{" <stmt_list> "}"\n<param_list> ::= ε | <type> <identifier> | <type> <identifier> "," <param_list>`
  },
  {
    title: "Statements",
    grammar: `<stmt_list> ::= <stmt> | <stmt> <stmt_list>\n<stmt> ::= <var_decl> | <assign_stmt> | <print_stmt> | <if_stmt> | <while_stmt> | <return_stmt>\n<assign_stmt> ::= <identifier> "=" <expr> ";"\n<print_stmt> ::= "print" "(" <expr> ")" ";"\n<if_stmt> ::= "if" "(" <condition> ")" "{" <stmt_list> "}"\n<while_stmt> ::= "while" "(" <condition> ")" "{" <stmt_list> "}"\n<return_stmt> ::= "return" <expr> ";"`
  },
  {
    title: "Expressions",
    grammar: `<expr> ::= <term> | <expr> "+" <term> | <expr> "-" <term>\n<term> ::= <identifier> | <literal> | "(" <expr> ")"\n<condition> ::= <expr> <rel_op> <expr>\n<rel_op> ::= ">" | "<" | "==" | "!="`
  }
];

export const codeExamples: CodeExample[] = [
  {
    title: "Hello World Style",
    description: "A minimal class with a method that prints a greeting.",
    code: `class Hello {
    func main() {
        print("Hello, JLite");
    }
}`
  },
  {
    title: "Variable Assignment",
    description: "Declaring and assigning an integer value.",
    code: `class AssignDemo {
    int x;

    func main() {
        x = 42;
        print(x);
    }
}`
  },
  {
    title: "If Statement",
    description: "Conditional logic based on a relational expression.",
    code: `class IfDemo {
    int score;

    func main() {
        score = 80;
        if (score > 50) {
            print("pass");
        }
    }
}`
  },
  {
    title: "While Loop",
    description: "Iterative countdown using while and assignment.",
    code: `class LoopDemo {
    int counter;

    func main() {
        counter = 3;
        while (counter > 0) {
            print(counter);
            counter = counter - 1;
        }
    }
}`
  },
  {
    title: "Full Class Example",
    description: "A complete example combining declarations, branching, and loops.",
    code: `class Demo {
    int x;

    func main() {
        x = 10;
        print(x);

        if (x > 5) {
            print("large");
        }

        while (x > 0) {
            print(x);
            x = x - 1;
        }
    }
}`
  }
];

export const compilerStages: CompilerStage[] = [
  {
    stage: "Lexical Analysis",
    detail: "Lexer converts source code into tokens."
  },
  {
    stage: "Syntax Analysis",
    detail: "Parser checks token order using grammar rules."
  },
  {
    stage: "Semantic Analysis",
    detail: "Semantic analyzer checks declarations and types."
  },
  {
    stage: "AST Construction",
    detail: "AST represents program structure for later phases."
  },
  {
    stage: "Interpretation / Code Generation",
    detail: "Interpreter or code generator executes program logic."
  }
];

export const keywords = [
  "class",
  "func",
  "int",
  "string",
  "bool",
  "if",
  "while",
  "return",
  "print"
];

export const tokens = [
  "identifier",
  "number_literal",
  "string_literal",
  "boolean_literal",
  "left_brace",
  "right_brace",
  "left_paren",
  "right_paren",
  "semicolon",
  "comma",
  "operators"
];

export const operators = [
  "Arithmetic: +, -, *, /",
  "Relational: >, <, ==, !=",
  "Assignment: ="
];

export const futureWork = [
  "Support for arrays and collection types.",
  "Function parameters with richer type checking.",
  "Boolean logic operators and compound conditions.",
  "Better error diagnostics in lexer and parser.",
  "Optional bytecode generation backend."
];

export const fullBnf = `<program> ::= <class_decl>
<class_decl> ::= "class" <identifier> "{" <decl_list> "}"
<decl_list> ::= <decl> | <decl> <decl_list>
<decl> ::= <var_decl> | <method_decl>
<var_decl> ::= <type> <identifier> ";"
<method_decl> ::= "func" <identifier> "(" <param_list> ")" "{" <stmt_list> "}"
<stmt_list> ::= <stmt> | <stmt> <stmt_list>
<stmt> ::= <var_decl> | <assign_stmt> | <print_stmt> | <if_stmt> | <while_stmt> | <return_stmt>
<assign_stmt> ::= <identifier> "=" <expr> ";"
<print_stmt> ::= "print" "(" <expr> ")" ";"
<if_stmt> ::= "if" "(" <condition> ")" "{" <stmt_list> "}"
<while_stmt> ::= "while" "(" <condition> ")" "{" <stmt_list> "}"
<return_stmt> ::= "return" <expr> ";"`;
