//History Trials
/*

import createHistory from 'history/createBrowserHistory'
const myHistory = createHistory()
//const location = myHistory.location

myHistory.listen((loc, action)=>{

  console.log("loc");
  console.log(loc);
  console.log(action);
  //console.log(loc.action);
  //console.log(loc.state);

  if (action === 'POP') {
        //return;
        window.scrollTo(0, 0);
    }
  else if (loc.state && loc.state.scroll !== undefined && !loc.state.scroll) {
      console.log("no scrolls");
      return;
  }
  else{
    console.log("else scroll up");
    window.scrollTo(0, 0);
  }

})

export default myHistory

*/
