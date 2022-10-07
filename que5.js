const product=(...args)=> {
    return args.reduce((acc, cur)=> {
      return acc * cur;
    })
  }
  console.log(product(2,3,4,5));