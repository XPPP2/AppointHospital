<template>
    <div id="User">
        <el-container>
            <el-header><mainHeader></mainHeader>
            </el-header>
            <el-container>
              <el-main>
                <div style="width: 1280px; margin: 0 auto">
                <el-row style="margin-top: 20px" :gutter="10">
                  <el-col :span="4">
                    <div>
                      <el-menu router default-active="1">
                        <el-menu-item route="user" index="1">User Info</el-menu-item>
                        <el-menu-item route="appoint_mine" index="2">My Appointment</el-menu-item>
                        <el-menu-item route="case_mine" index="3">My Result</el-menu-item>
                      </el-menu>
                    </div>
                  </el-col>
                  <el-col :span="20">
                  <el-form :model="member" label-width="120px">
                    <el-form-item label="Head Pic">
                        <el-upload
                        class="avatar-uploader"
                        action="http://127.0.0.1:8080/api/fileupload/upload"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <el-avatar v-if="member.avatarUrl" :src="member.avatarUrl"></el-avatar>
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="Nick Name">
                        <el-input v-model="member.nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="Name">
                        <el-input v-model="member.realName"></el-input>
                    </el-form-item>
                    <el-form-item label="Phone">
                        <el-input v-model="member.mobile"></el-input>
                    </el-form-item>
                    <el-form-item label="Gender">
                        <el-radio-group v-model="member.gender">
                          <el-radio label="0" value="0">F</el-radio>
                          <el-radio label="1" value="1">M</el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Save</el-button>
                    </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
                </div>
              </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import mainHeader from '../../components/main-header'
export default {
  name: "User",
  data() {
    return {
      user: null,
      member: {}
    };
  },
  components: {
    mainHeader
  },
  methods:{
    getUser: function(){
      var that = this;
      this.$axios.get(that.domain + "/api/member/info", {params: {}, headers:{ token: localStorage.getItem("ftoken") }}).then(
        function(res){
          var r = res.data;
          console.log(r)
          if(r.code == 0){
            that.member = r.member;
          }
        }
      )
    },
    onSubmit(e){
        var that = this;
        var data = this.member;
        this.$axios.post(that.domain + '/member/update', 
            data,
            {
                headers: {'token': localStorage.getItem("ftoken")}
            }
        ).then(function(res){
            console.log(res)
            if(res.data.code == 0){//成功
              that.showList = true;
              that.query();
            }else{
              that.errorMsg = res.data.msg;
              that.$message.error(res.data.msg);
            }
        })
      },
    handleAvatarSuccess(e){
      console.log(e)
      this.member.avatarUrl = e.url
    },
    beforeAvatarUpload(e){

    },
  },
  created(){
    this.getUser();
  }
};
</script>

<style scoped>

</style>