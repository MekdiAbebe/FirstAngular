
(function () {
  'use strict';

  mtmDemo.factory('svc', ['$http', '$q', function ($http, $q) {
    var _webAbsoluteUrl = 'testURL';//_spPageContextInfo.webAbsoluteUrl;
    var _getConfig = {
      headers: { 'accept': 'application/json;odata=verbose' }
    };
    //RequestHeader for get,post,update,delete
    var requestHeader = {
      getHeader: {
        'headers': {
          'accept': 'application/json;odata=verbose'
        }
      },
      postHeader: {
        'headers': {
          "X-RequestDigest": $("#__REQUESTDIGEST").val(),
          'content-type': 'application/json;odata=verbose',
          'accept': 'application/json;odata=verbose'
        }
      },
      deleteHeader: {
        'headers': {
          "X-RequestDigest": $("#__REQUESTDIGEST").val(),
          'content-type': 'application/json;odata=verbose',
          "IF-MATCH": "*"
        }
      },
      updateHeader: {
        'headers': {
          "X-RequestDigest": $("#__REQUESTDIGEST").val(),
          'content-type': 'application/json;odata=verbose',
          'accept': 'application/json;odata=verbose',
          "IF-MATCH": "*",
          "X-HTTP-Method": "MERGE"
        }
      }
    };
    /**SharePoint CRUD Operations Starts here**/
    function _getLisItems(urlValue) {
      return $http.get(urlValue, requestHeader.getHeader)
        .then(function (response) {
          return response.data.d.results;
        });
    };

    function _getListItem(endpoint) {
      return $http.get(endpoint, requestHeader.getHeader).then(function (response) {
        return response.data.d;
      });
    };

    function _CreateListData(urlValue, data) {
      return $http.post(urlValue, data, requestHeader.postHeader)
        .then(function (response) {
          return response;//'Created from Custom Service...';
        });
    };

    function _deleteListData(urlValue) {
      return $http.delete(urlValue, requestHeader.deleteHeader)
        .then(function (response) {
          return response;
        });
    };

    function _updateListData(urlValue, data) {
      return $http.post(urlValue, data, requestHeader.updateHeader)
        .then(function (response) {
          return response;
        });
    };

    /**SharePoint CRUD Operation Ends here**/



    return {
      getTemplateUrl: function(temlateName){
        return '/views/' + temlateName;
      }
    };//End of Service Return

  }]);//ends svc function

})();//main anonymous function

