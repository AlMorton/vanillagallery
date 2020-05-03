function CanvasGo() {

    const canvas = document.querySelector('#test-canvas');
    const ctx = canvas.getContext('2d');
    const canvasHeight = parseInt(canvas.attributes["height"].value);
    const canvasWidth = parseInt(canvas.attributes["width"].value);
    const axisIndent = 40;
    const xScale = 100;
    const yScale = xScale / 10;

    var y = [41, 55, 13, 23, 76, 8, 9, 40, 20, 50, 20, 1, 3, 5, 6, 20,43];

    ctx.lineJoin = 'round';
    ctx.strokeStyle = "#d3d3d3";

    drawXAxisScale();    
    drawYAxisScale();
    drawLineGraph();

    function drawLineGraph() {

        ctx.strokeStyle = '#feb72b';
        ctx.lineWidth = 2;
        var path = new Path2D();
        for (let i = 0; i < y.length; i++) {
            if (i === 0) {
                // Move pointer to initial start at position x = 0
                path.moveTo(axisIndent, setY(i));
            }
            else {
                var x = xScale * i;
                x += axisIndent;
                path.lineTo(x, setY(i));
                path.moveTo(x, setY(i));
                drawPoint(x,i);
            }
        }

        ctx.stroke(path);        
    }

    function drawPoint(x,i) {

        var circle = new Path2D();
        circle.arc(x, setY(i), 5, 0, Math.PI * 2, true);
        ctx.fillStyle = "#0776ff";
        ctx.fill(circle);
    }

    function setY(i) {
        return canvasHeight - (yScale * y[i]) - axisIndent;
    }

    function drawXAxisScale() {

        ctx.lineWidth = 2;
        var x = new Path2D();
        x.moveTo(axisIndent, canvasHeight - axisIndent);
        x.lineTo(canvasWidth, canvasHeight - axisIndent);
        ctx.stroke(x);

        drawXTickMarks();

        function drawXTickMarks() {
            ctx.lineWidth = 1;
            // loop along the x-axis
            for (let i = axisIndent; i < canvasWidth; i++) {
                if (i % 20 === 0) {
                    var path = new Path2D();
                    path.moveTo(i, canvasHeight - axisIndent);
                    path.lineTo(i, canvasHeight - 20);
                    ctx.stroke(path);
                }
            }
        }
    }

    function drawYAxisScale() {

        ctx.lineWidth = 2;
        var y = new Path2D();
        y.moveTo(axisIndent, 0);
        y.lineTo(axisIndent, canvasHeight - axisIndent);
        ctx.stroke(y);

        drawYTickMarks();

        function drawYTickMarks() {
            ctx.lineWidth = 1;
            for (let i = 0; i < canvasHeight - 20; i++) {

                if (i % 20 === 0) {
                    var path = new Path2D();
                    path.moveTo(axisIndent, i + 0.5);
                    path.lineTo(20, i + 0.5);
                    ctx.stroke(path);                    
                }

                if(i % 100 == 0) {
                    drawLineMark(i - axisIndent);
                }
            }
        }

        function drawLineMark(y)
        {            
            y += 0.5;
            var path = new Path2D();
            path.moveTo(axisIndent, y);
            path.lineTo(canvasWidth, y);
            ctx.stroke(path);

        }
    }
}

CanvasGo();
