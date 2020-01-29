function easyHTTP(){
    this.http = new XMLHttpRequest()
}

// MAke an HTTP GET Request
easyHTTP.prototype.get = function (url, callback){
    this.http.open('GET', url, true);
    let self = this
    this.http.onload = function(){
        if(self.http.status === 200){
            // embassy(self.http.responseText)
            callback(self.http.responseText)
        } else{
            callback('Page Not Found!')
            (this.http.status)
        }
    }
    this.http.send()
} 