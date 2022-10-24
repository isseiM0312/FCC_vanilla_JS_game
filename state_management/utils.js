export function drawStatusText(ctx,input, player) {
    ctx.font = '20px Helvetica';
    ctx.fillText('Last input: ' + input.lastKey, 20, 50);
    ctx.fillText('Current State: '+ player.currentState.state, 20,100)
}