<template>
    <div>
        <el-container>
            <el-header>
              <mainHeader></mainHeader>
            </el-header>
            <el-container>
                <mainSidebar :active="active"></mainSidebar>
                <el-main>
                    <el-form :inline="true" :model="q">
                        <el-form-item label="Nickname">
                            <el-input v-model="q.nickname" placeholder="Nickname"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="query">Search</el-button>
                            <el-button type="danger" @click="del">Delete</el-button>
                        </el-form-item>
                    </el-form>
                        <el-table
                        :data="memberList"
                        @selection-change="handleSelectionChange"
                        style="width: 100%">
                        <el-table-column
                          type="selection"
                          width="55">
                        </el-table-column>
                        <el-table-column
                            prop="avatarUrl"
                            label="Headpic"
                            >
                            <template slot-scope="scope">
                                <el-image
                                    style="width: 30px; height: 30px"
                                    :src="scope.row.avatarUrl"></el-image>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="nickname"
                            label="Nickname"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="loginName"
                            label="Username"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="realName"
                            label="Name"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="mobile"
                            label="Phone"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="createTime"
                            label="EnrollDate"
                            >
                        </el-table-column>
                        </el-table>
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="q.page"
                            :page-sizes="[10, 50, 100]"
                            :page-size="q.limit"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total">
                        </el-pagination>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import mainHeader from '../../../components/admin-main-header'
import mainSidebar from '../../../components/admin-main-sidebar'
export default {
  name: "AdminMember",
  data() {
    return {
      q:{
        nickname: '',
        page: 1,
        limit: 10
      },
      memberList: [],
      active: '2',
      total: 0,
      ids: []
    };
  },
  components: {
    mainHeader,
    mainSidebar
  },
  methods:{
      query(){
        var that = this;
        this.$axios.get(that.domain + '/member/list',
        {    
            params: that.q,
            headers: {'token': localStorage.getItem("atoken")}
        }).then(function(res){
            if(res.data.code == 0){//成功
              that.memberList = res.data.rows
              that.total = res.data.total
            }else{
              
            }
        })
      },
      del(){
        if(this.ids.length == 0){
            this.$message.info("Please Select");
            return;
        }
        var that = this;
        this.$axios.post(that.domain + '/member/delete',
            that.ids,
            {
                headers: {'token': localStorage.getItem("atoken")}
            }).then(function(res){
            
            if(res.data.code == 0){//成功
              that.query();
            }else{
              that.$message.error(res.data.msg);
            }
        })
      },
      handleCurrentChange(e){
          this.q.page = e;
          this.query();
      },
      handleSizeChange(e){
          this.q.limit = e;
          this.query();
      },
      handleSelectionChange(e){
        var ids = [];
        for(var i = 0; i < e.length; i++){
            ids.push(e[i].id)
        }
        this.ids = ids;
      }
  },
  created(){
    this.query();
  }
};
</script>

<style scoped>

</style>