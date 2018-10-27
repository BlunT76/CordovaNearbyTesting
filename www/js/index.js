/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        var affiche = document.getElementById('affiche')
        var msg = document.getElementById('msg')
        var subs = document.getElementById('test');
        var logout = document.getElementById('logout')
        var clear = document.getElementById('clear')
        var text = document.getElementById('text')

        subs.addEventListener("click", function () {
            
            window.nearby.subscribe(function (success) {
                console.log('clikk');
                affiche.innerHTML += success+'<br>'
                console.log(success)
            }, function (error) {
                affiche.innerHTML += error+'<br>'
                console.log(error)
            })
        }, false)

        
        logout.addEventListener("click", function () {
            console.log('clikk');
            window.nearby.unsubscribe(function (success) {
                affiche.innerHTML += success+'<br>'
                console.log(success)
            }, function (error) {
                affiche.innerHTML += error+'<br>'
                console.log(error)
            })
        }, false)

        msg.addEventListener("click", function () {
            var message = text.value
            window.nearby.publish(message, function (success) {
                affiche.innerHTML += message+success+'<br>'
                console.log(success + message)
                console.log(message)
            }, function (error) {
                affiche.innerHTML += error+'<br>'
                console.log(error)
            })
        }, false)

        clear.addEventListener('click', function(){
            affiche.innerHTML = ''
        })

        // window.nearby.subscribe(function (success) {
        //     console.log(success)
        //     affiche.innerHTML += success+'<br>'
        // }, function (error) {
        //     affiche.innerHTML += error+'<br>'
        //     console.log(error)
        // })
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        //this.receivedEvent('deviceready');

    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

    }
};

app.initialize();