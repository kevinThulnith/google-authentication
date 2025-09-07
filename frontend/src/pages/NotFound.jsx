function NotFound() {
  return (
    <div className="text-center p-8 bg-[var(--color-burning-orange-950)] rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-6xl font-bold text-[var(--color-burning-orange-200)] mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-[var(--color-burning-orange-300)] mb-4">
        Not Found
      </h2>
      <p className="text-[var(--color-burning-orange-100)] text-xl">
        The page you&apos;re looking for doesn&apos;t exist!
      </p>
    </div>
  );
}

export default NotFound;
