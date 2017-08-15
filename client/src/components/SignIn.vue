<template lang="html">
  <div class="modal fade loginpopup index" id="login-modal"   tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
      <div class="modal-dialog login-form animated">
          <div class="modal-content">
               <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body">
             <form  name="loginform">
                 <div id="my-tab-content" class="tab-content">
                       <div class="tab-pane active" id="login" name="login">
                           <div class="form-group" >
                      <input type="email" id="userName" name="userName" class="form-control" placeholder="UserName" required >
                      <span class="has-error" ng-show="loginform.userName.$touched && loginform.userName.$invalid" class="font-ten">
                       <span class="has-error"   ng-show="loginform.userName.$error.email" class="font-ten">Invalid  email address.</span>
                       <span class="has-error"	ng-show="loginform.userName.$error.required" class="font-ten">UserName is required..</span>


                     </span>
                 </div>
                 <div class="form-group">
                   <input type="password" id="psd" name="psd" class="form-control" placeholder="Password"   required >
                 </div>
                 <div class="form-group text-center" >
                     <button class="btn btn3d text-center imm" type="submit" > Log In 	 </button>
                 </div>
                 <div class="form-group login-index" style="margin-bottom:0px;padding-top:0px !important">
                     <input type="checkbox" name="checkbox" id="Option">
                     <label class="Option" for="Option"> Rememer Me </label>
                     <a href="/#forgetpassword" data-toggle="tab"  id="forgotpsw">Forgot Password?</a>
                   </div>
                       </div>

                       <div class="tab-pane" id="forgetpassword">
                 <div class="form-group " >
                   <input type="email" id = "emailId" name="emailId" required class="form-control"  placeholder="Email Address" >
                 </div>
                 <div class="form-actions text-center">
                   <button type="button" class="btn btn3d imm"  >Submit </button>
                 </div>


              </div>
                  </div>
             </form>
        </div>
          </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'SignIn'
}
</script>

<style lang="css">
</style>
