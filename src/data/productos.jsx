// src/data/productos.js

// Burgers
import ChikenBurgerDsk from "../assets/productos/burgers/ChikenBurger.webp";
import ChikenBurgerCheddarDsk from "../assets/productos/burgers/ChikenBurgerCheddarDsk.webp";
import ClasicaDsk from "../assets/productos/burgers/ClasicaDsk.webp";
import HamburDobleCheddarDsk from "../assets/productos/burgers/HamburDobleCheddarDsk.webp";
import HamburSimpleCheddarDsk from "../assets/productos/burgers/HamburSimpleCheddarDsk.webp";
import HamburTripleCheddarDsk from "../assets/productos/burgers/HamburTripleCheddarDsk.webp";
import HambCuadrupleDsk from "../assets/productos/burgers/HambCuadrupleDsk.webp";
import HambSimpleDsk from "../assets/productos/burgers/HambSimpleDsk.webp";
import HambTripleDsk from "../assets/productos/burgers/HambTripleDsk.webp";

// Tenders (Chicken)
import ChikenDsk from "../assets/productos/chiken/ChikenDsk.webp";
import ChikenDsk2 from "../assets/productos/chiken/ChikenDsk2.webp";
import ChikenDsk3 from "../assets/productos/chiken/ChikenDsk3.webp";

// Wraps
import WrappDsk from "../assets/productos/wraps/WrappDsk.webp";
import WrappDsk2 from "../assets/productos/wraps/WrappDsk2.webp";
import WrappDsk3 from "../assets/productos/wraps/WrappDsk3.webp";
import WrappDsk4 from "../assets/productos/wraps/WrappDsk4.webp";

const productosData = {
  Burgers: [
    
    {
      img: ClasicaDsk,
      name: "CLASICA",
      desc: "Pan de papa, doble medallón de carne, 2 fetas de Cheddar, lechuga, tomate y cebolla morada."
    },
    {
      img: HamburDobleCheddarDsk,
      name: "BACCON Y HUEVO",
      desc: "Pan de papa, doble medallón de carne, 2 fetas de bacon crocante, 2 fetas de Cheddar y huevo a la plancha."
    },
    {
      img: HamburSimpleCheddarDsk,
      name: "CHEDDAR Y BACCON",
      desc: "Pan de papa, doble medallón de carne, 3 fetas de Cheddar y 2 fetas de bacon crocante."
    },
    {
      img: ChikenBurgerCheddarDsk,
      name: "CIN CULPA CHICKEN",
      desc: "Pan de papa, medallón de pollo 100% pechuga, Cheddar en fetas, Portobellos asados y cebolla caramelizada."
    },

    {
      img: HambSimpleDsk,
      name: "CIN CULPA MEAT",
      desc: "Pan de papa, doble medallón de carne, 2 fetas de Cheddar, Portobellos asados, cebolla caramelizada y Cheddar fundido."
    },

    {
      img: ChikenBurgerDsk,
      name: "CLASICA CHICKEN",
      desc: "Pan de papa, medallón de pollo 100% pechuga, lechuga fresca, tomate y cebolla morada."
    },
    {
      img: HambCuadrupleDsk,
      name: "CUADRUPLE",
      desc: "Pan de papa, cuádruple medallón de carne, 4 fetas de Cheddar y 4 fetas de bacon crocante."
    },
    {
      img: HambTripleDsk,
      name: "CHEDDAR Y BACCON SIMPLE",
      desc: "Pan de papa, un medallón de carne, 2 fetas de Cheddar y 2 fetas de bacon crocante."
    }
  ],

  Tenders: [
    {
      img: ChikenDsk,
      name: "Tender Clásico",
      desc: "Crujientes tiras de pechuga de pollo, rebozadas en especias secretas, acompañadas de salsa de mostaza y miel."
    },
    {
      img: ChikenDsk2,
      name: "Tender Picante",
      desc: "Finas tiras de pollo con un toque de chile ahumado, servidas con aderezo ranch casero."
    },
    {
      img: ChikenDsk3,
      name: "Tender BBQ",
      desc: "Jugosos tenders bañados en salsa barbacoa artesanal, ideales para compartir."
    }
  ],

  Wraps: [
    {
      img: WrappDsk,
      name: "Wrap Clásico",
      desc: "Tortilla suave rellena de pollo a la parrilla, lechuga, tomate y aderezo cítrico."
    },
    {
      img: WrappDsk2,
      name: "Wrap Veggie",
      desc: "Tortilla integral con mix de vegetales grillados, hummus de pimiento y rúcula fresca."
    },
    {
      img: WrappDsk3,
      name: "Wrap Crunch",
      desc: "Tortilla crujiente rellena con pollo crispy, lechuga, queso y salsa de chipotle."
    },
    {
      img: WrappDsk4,
      name: "Wrap Mediterráneo",
      desc: "Tortilla suave con pollo al limón, aceitunas, queso feta y pesto de albahaca."
    }
  ]
};

export default productosData;
