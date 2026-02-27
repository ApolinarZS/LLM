let variable = [2]
variable [0] = "Apolinar";
variable [1] = "Zaera";
variable [2] = "Sánchez";

for (let i = 0; i < variable.length; i++) {
  variable.sort();
  console.log(variable[i]);
}