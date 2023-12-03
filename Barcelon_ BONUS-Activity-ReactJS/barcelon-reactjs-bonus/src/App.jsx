import React, { useState } from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <StudentCard
        image="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/404315479_24159920150318459_8872834058563089707_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEqe30V7h_XvUFEs8ooCCRSbOy3xs3BoUVs7LfGzcGhRUuZBt2WMV2UTy--8S-LlAU16zQf6tZKtut1jS_s6WJk&_nc_ohc=Exc1YDicQdgAX88Fxra&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfDdmPZ-7g0UYFwWSpS--AZFBS5sXknW7WvpStfdBnGzmg&oe=657062C1"
        name="Ise B. Barcelon"
        id={191149}
        bday="May 11, 2002"
        quote="Salamat nalang sa lahat"
        />

       <StudentCard/>

    </div>
  );
}

export default App;
