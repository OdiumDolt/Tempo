function mouse_move_func(e:any){
    for(let i in mouse_move){
        mouse_move[i](e)
    }
}

function mouse_up_func(e:any){
    for(let i in mouse_up){
        mouse_up[i](e)
    }
}


var mouse_move: {[key: string]: Function} = {};
var mouse_up: {[key: string]: Function} = {};
var mouse_listeners = {
    mouse_move:mouse_move,
    mouse_up:mouse_up
}

export {
    mouse_listeners,
    mouse_move_func,
    mouse_up_func
}