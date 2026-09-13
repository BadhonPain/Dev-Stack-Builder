<div align="center">

# 🚀 DevStack Builder

**Curate, compare, and assemble your ultimate developer stack.**

An interactive, responsive web application that empowers developers to explore modern technologies across Frontend, Backend, Databases, DevOps, and Languages, select their preferred tools, and build a cohesive development stack.

<br />

[![Live Demo](https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://dev-stack-builder-web.netlify.app/)

🔗 **Live Website:** [https://dev-stack-builder-web.netlify.app/](https://dev-stack-builder-web.netlify.app/)

---

</div>

## 📌 Project Overview

**DevStack Builder** is designed to simplify technology stack selection for developers, team leads, and project architects. Users can browse categorized technologies, view ratings and descriptions, select tools for their project, and enforce a clean, balanced stack with real-time feedback.

---

## 🛠️ Technologies Used

- **Core Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Component Utilities:** [DaisyUI](https://daisyui.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (`FaReact`, `SiVuedotjs`, `SiPostgresql`, etc.)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## ✨ Key Features

1. **Category Constraint (One Tech per Category):**
   Enforces a well-structured stack by allowing only one technology per category (e.g., selecting *Vue.js* when *React* is already in the Frontend slot automatically replaces it and notifies the user).

2. **Interactive Stack Management:**
   Add tools with a single click, view selected tools in a persistent sidebar, delete individual selections, or clear the entire stack with instant feedback.

3. **Dynamic Data & Responsive Architecture:**
   Loads technology specifications asynchronously from structured JSON with seamless icon mapping, full mobile menu support, and responsive layouts across all screen sizes.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/BadhonPain/Dev-Stack-Builder.git
   cd Dev-Stack-Builder/dev-stack-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 💡 React Core Concepts & FAQ

### 1. What is JSX, and why is it used in React?
**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows developers to write HTML-like elements and structures directly inside JavaScript files. It is used in React because it makes UI code visual, expressive, and easier to read, combining markup and rendering logic in one place while giving access to the full power of JavaScript expressions inside `{}` curly braces.

### 2. What is the difference between props and state?
- **Props (Properties):** Immutable, read-only data passed from a parent component down to a child component to configure it. The child component cannot modify the props it receives.
- **State:** Internal, mutable data managed within a component. State holds values that change over time (such as user selections or toggles) and triggers a component re-render whenever it is updated.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook declares a reactive state variable and provides a setter function to update its value and trigger a re-render. In this project:
- **`src/components/ExploreTechs.tsx`:** `const [selectedStack, setSelectedStack] = useState<TechStack[]>([])` manages the user's selected technology items.
- **`src/components/Nav.tsx`:** `const [isOpen, setIsOpen] = useState(false)` manages the open/closed state of the mobile navigation menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook performs side effects in functional components, such as data fetching, timer setup, or manually modifying the DOM. When loading JSON data, `useEffect` executes the asynchronous `fetch()` call after the initial render so that fetching does not block rendering, updating the component's state once the data arrives. *(In modern React 19, this pattern can also be seamlessly coordinated with Suspense and data promises).*

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React relies on the `key` prop during reconciliation to identify which specific items have changed, been added, or been removed. Giving each item a stable, unique key (such as `tech.id`) avoids costly DOM re-renders and prevents unexpected visual bugs or state mismatch when items are sorted, added, or deleted.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means displaying different UI outputs depending on conditions, state, or props. 

**Example from `src/components/YourStack.tsx`:**
```tsx
{selectedStack.length === 0 ? (
  <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center">
    <p className="text-sm text-gray-400">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-3">
    {selectedStack.map((tech) => (
    
    ))}
    <button onClick={onRemoveAll}>Remove All</button>
  </div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** Data is passed **downwards** via **props**. For example, `ExploreTechs` passes the `tech` object and `isSelected` boolean down to `TechCard`:
  ```tsx
  <TechCard tech={tech} isSelected={isSelected} onToggle={handleToggleTech} />
  ```
- **Child to Parent:** The child communicates **upwards** by executing a **callback function** provided by the parent via props. For example, clicking the card button in `TechCard` calls `onToggle(tech)`, passing the selected technology back to `ExploreTechs` to update the parent's state.

---

<div align="center">
  <sub>Built by <a href="https://github.com/BadhonPain">Badhon Pain</a></sub>
</div>
