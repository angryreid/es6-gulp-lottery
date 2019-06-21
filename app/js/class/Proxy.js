{
  // Proxy
  let obj = {
    time: '2017-02-23',
    name: 'net',
    _r: 111
  }
  let monitor = new Proxy(obj, {
    get(target,key){ 
      // console.log(target);
      // console.log(key);
      return target[key].replace('2017','2018')
    },
    set(target, key, value){
      // console.log(value)
      if(key === 'name'){
        return target[key] = value;
      }else{
        console.error('No Authration of editing');
        return target[key];
      }
    },
    has(target,key){
      if(key === 'name'){
        return target[key]
      }else{
        return false;
      }
    },
    deleteProperty(target,key){
      if(key.startsWith('_')){
        delete target[key];
        return true;
      }else{
        return target[key];
      }
    },
    // use Object,keys,Object.getOwnpropertySymbol,Object.getOwnpropertyNames
    ownKeys(target,key){
      return Object.keys(target).filter(v => v!= 'time')
    }
  })

  console.log('get',monitor.time);
  monitor.time = '11';
  console.log('has','name' in monitor);
  
  console.log('has','time' in monitor);
  delete monitor.time;
  console.log(monitor)
  
  console.log('ownKeys',Object.keys(monitor))
}