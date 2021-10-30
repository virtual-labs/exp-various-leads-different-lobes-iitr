//scripting of connectors begin
var rightconnection=false;
var datapoints1 = [];
jsPlumb.ready(function () {
    var instance,
        discs = [],
        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },
        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },
        initAnimation = function (elId) {
            var el = document.getElementById(elId);
            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }   
            });
        },
 
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare3 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint3);
        },
        
       
        endpoint9 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare9 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint9);
        },
        endpoint10 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare10 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint10);
        },
        endpoint15 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare15 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint15);
        },



        endpoint11 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare11 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint11);
        },
        endpoint12 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare12 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint12);
        },
        endpoint13 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare13 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint13);
        },

        endpoint14 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare14 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint14);
        },
       
// this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };
 // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
          Endpoint: [ "Image", { url: "littledot.png" } ], 
        Connector: [ "Bezier", { curviness: -70 } ],
        Container: "canvas"
    });
 // suspend drawing and initialise.
    instance.batch(function () {
        var e3 = prepare3("ld3"),
           
           
            e9  = prepare9("ld9"),
            e10 = prepare10("ld10"),
            e11 = prepare11("ld11"),
            e12 = prepare12("ld12"),
            e13 = prepare13("ld13"),
            e14 = prepare14("ld14"),
            e15 = prepare15("ld15"),
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");
         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });
            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });   
    });
    jsPlumb.fire("jsPlumbDemoLoaded", instance);
document.getElementById("check-button").addEventListener("click", function () {
      
        var correct_connections_9_12 = [
            {
                "source": "ld9",
                "target": "ld12"
            },
            {
                "source": "ld12",
                "target": "ld9"
            }
        ];
        var correct_connections_10_13 = [
            {
                "source": "ld13",
                "target": "ld10"
            },
            {
                "source": "ld10",
                "target": "ld13"
            }
        ];
        var correct_connections_3_11 = [
            {
                "source": "ld3",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld3"
            }
        ];
       var correct_connections_15_14 = [
            {
                "source": "ld15",
                "target": "ld14"
            },
            {
                "source": "ld14",
                "target": "ld15"
            }
        ];
        var allowed_connections = [
           
            {
                "source": "ld12",
                "target": "ld9"
            },
            {
                "source": "ld9",
                "target": "ld12"
            },
            {
                "source": "ld13",
                "target": "ld10"
            },
            {
                "source": "ld10",
                "target": "ld13"
            },
            {
                "source": "ld3",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld3"
            },
           {
                "source": "ld15",
                "target": "ld14"
            },
            {
                "source": "ld14",
                "target": "ld15"
            },
           

         ];
         var actual_connections = instance.getAllConnections();
       
        var is_connected_9_12 = false;
        var is_connected_10_13 = false;
        var is_connected_3_11 = false;
        var is_connected_15_14 = false;
        var unallowed_connection_present = false;
     
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_9_12){
                is_connected_9_12 = correct_connections_9_12 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_10_13){
                is_connected_10_13 = correct_connections_10_13 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_3_11){
                is_connected_3_11 = correct_connections_3_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_15_14){
                is_connected_15_14 = correct_connections_15_14 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
       
        if ( is_connected_9_12&&is_connected_10_13&&is_connected_3_11&&is_connected_15_14&& !unallowed_connection_present) {
            alert("correct connection");
            rightconnection=true;

            document.getElementById("video").style.display = "block";
            document.getElementById("ACQ").style.display = "none";
            





             return;
            }
        else if(!unallowed_connection_present){
                               alert("Please complete connection");
                               }
            else {
               alert("WRONG CONNECTION");
                return;
            } 
    });
});

//Scripting of connectors ends


