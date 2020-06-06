import React from 'react';
import { withRouter } from 'react-router-dom';



function Leader({ user }) {

  return (<>

    <div>
      <div>
        Foto
        </div>
      <div>
        Info
        </div>
      <div>
        Initiativs
        </div>
    </div>
  </>)
}



export default (withRouter(Leader));
