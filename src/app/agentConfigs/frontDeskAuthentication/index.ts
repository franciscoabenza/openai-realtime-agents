import authenticationAgent from './authentication';
import tourAgent from "./tourGuide";
import { injectTransferTools } from '../utils';

// authenticationAgent.downstreamAgents = [tourAgent]
// tourAgent.downstreamAgents = [authenticationAgent]

// const agents = injectTransferTools([authenticationAgent, tourAgent]);
const agents = injectTransferTools([authenticationAgent]);

export default agents;