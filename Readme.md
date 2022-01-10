# useeffect

Its a react hook which is called when the app is rendered first or their is the change in dependencies(values)
by this we can basically make a http req. or store any value globally -->


# React fragments

Use to wrap components so that we dont have to use useless divs


# useReducer
 
 Alternative for usestate but good to use if we have to handle more complex data

Syntax

 const [state , funtocallstate] = usereducer(reducercallback (takes 2 input last updated value and action that occured) , initial_state , initfun)


# React context

Use to store and share data b/w components

React.createcontext({ object }) return a context object

# Refs 

used to store dom nodes data in which we dont need to run or maitain any state

Refcomp = React.forwardRefs((props , ref)=>{

return <input ref = {ref}></>

})

<Refcomp ref = {variable}/>

now as the value changes if we directly reflect to variable no need call any fun


# usememo

React.memo(component function)

if we dont want to execute that function again 
than we can use it just to optimize it looks
for if the props changes if not than that  function will not be called


# useCallback(regular function , [] (dependencies))

just stores a function so it cannot be rebuilt in memory 



