import { AgentConfig } from "@/app/types";
import { injectTransferTools } from "./utils";

// Define agents
const haiku: AgentConfig = {
  name: "haiku",
  publicDescription: "Agent that writes haikus.", // Context for the agent_transfer tool
  instructions:
`Ask the lead for the following questions:
    ¿Cuál es tu mayor reto actual en automatización de procesos en tu empresa?
¿Qué procesos te gustaría automatizar para ahorrar tiempo o dinero?
¿Has intentado implementar alguna automatización antes? ¿Cómo fue la experiencia?
¿Qué herramientas de automatización conoces o utilizas actualmente?
¿Cuánto estarías dispuesto a invertir en una automatización que te ahorre X horas de trabajo al mes?
¿Qué te haría confiar en un proveedor de automatización?
¿Preferirías un pago único por la automatización o un modelo de suscripción con soporte continuo?
Si te ofrecemos una prueba gratuita o un caso de éxito similar a tu negocio, ¿te interesaría probarlo?`,
  tools: [],
};

const greeter: AgentConfig = {
  name: "greeter",
  publicDescription: "Agent that greets the user.",
  instructions:
    "Please greet the user and ask them if they are ready for evaluating how to automate their business processes.",
  tools: [],
  downstreamAgents: [haiku],
};

// add the transfer tool to point to downstreamAgents
const agents = injectTransferTools([greeter, haiku]);

export default agents;
