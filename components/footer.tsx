"use client";

export function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="container py-4 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Alex Kalergis. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
