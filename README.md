# Room-full-o-agents
Abstract until json.cfg "Chatroom full of LLM driven agents". Ollama llama3.21b driven ( cause I like local and small) . Use case 1 is a dungeons and dragons-esque game creating/making api calls for images and text to speech.

always Docker-compose up

-phase zero is bang out some folders and index.js. Agent and room oop zone under backend.
-- assorted dsign patterns around juggling room class and agent class
-- leader agent is very much wrapped up in the behvior implementation....drive the room interaction as dm. 
  -- Like a job to do...starts with laying out a plan and occasionally asks about the weather if things get looped into silence
  -- maybe no oop leader-agent bs and instead just a flag, 
  -- A room can have n leader flags unless decorated to max = n
  -- no min... a silent room...if no oop care, no point to at least > 1,  and only behavior driven,progress made. Manana, 
-- 
- phase 1 
-- import working mern stack project
  - swap out react for streaming equiv (prob ugly and simple) mern app, with system time to show streaming
  - add header w/links.
  - chatroom link for settings, page-spa-component && chatroom console is HUGE 75%% of height footer WITH SYSTEM TIME BANG. 3x system times on ui...why...keeps things hopping...
  -- logs all ui events in "verbose mode/per tab", per link-tab-page output is colored per tab s
  -- server is a color
  - load json and csv page
  -- send that to db/ db page o db testing buttons with text input fields.


- phase 10, dnd and software dev vibe crawling via prompt engineering asise...
  "A room's over arching goal is to provide a human parsible stream of products."
  - the extreme/near-term, ai looking at stuff, a la "agents in a room" and providing business fvalue shakes out of this pretty fast and is the near term to the cloud!!! , dream sheet local endstate.
  - the link: https://ridwanfajar.medium.com/send-your-container-logs-to-elk-elasticsearch-logstash-and-kibana-with-gelf-driver-7995714fbbad
  





 
