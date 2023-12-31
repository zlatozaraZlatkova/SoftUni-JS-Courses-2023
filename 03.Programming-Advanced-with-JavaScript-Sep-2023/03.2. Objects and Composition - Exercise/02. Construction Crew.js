function constructionCrew(workerInput) {
  const worker = { ...workerInput };
  if (worker.dizziness === true) {
    worker.levelOfHydrated += ((worker.weight / 0.1) / 100) * worker.experience;
    worker.dizziness = false;
    return worker;
  }

  return worker;
  
}

constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});

console.log("-------");

constructionCrew({
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true,
});

console.log("-------");
constructionCrew({
  weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false,
});

