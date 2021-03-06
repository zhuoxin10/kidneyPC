angular.module('filters', [])
    .filter('gender', function() {
        return function(input) {
            switch (input) {
                case 1:
                    return '男';
                    break;
                case 2:
                    return '女';
                    break;
                default:
                    return '未知';
            }
        };
    })
    .filter('bloodType', [function() {
        return function(type) {
            var name
            switch (type) {
                case 1:
                    name = 'A型'
                    break
                case 2:
                    name = 'B型'
                    break
                case 3:
                    name = 'AB型'
                    break
                case 4:
                    name = 'O型'
                    break
                case 5:
                    name = '不确定'
                    break
            }
            return name
        }
    }])
    // 支付状态
    .filter('paystatus', [function() {
        return function(type) {
            var name
            switch (type) {
                case 0:
                    name = '生成商户订单成功'
                    break
                case 1:
                    name = '生成预付单成功'
                    break
                case 2:
                    name = '支付成功'
                    break
                case 3:
                    name = '支付失败'
                    break
                case 4:
                    name = '取消订单'
                    break
                case 5:
                    name = '订单超时'
                    break
                case 6:
                    name = '退款处理中'
                    break
                case 7:
                    name = '退款关闭'
                    break
                case 8:
                    name = '退款异常'
                    break
                case 9:
                    name = '退款成功'
                    break
            }
            return name
        }
    }])

    // 预约时间
    .filter('bookingTime', [function() {
        return function(type) {
            var name
            switch (type) {
                case 'Morning':
                    name = '上午'
                    break
                case 'Afternoon':
                    name = '下午'
                    break
            }
            return name
        }
    }])
     // 退款金额
    .filter('refundmoney', [function() {
        return function(type) {
            var name
            name = type/100
            return name
        }
    }])
    // 退款状态
    .filter('refundstatus', [function() {
        return function(type) {
            var name
            switch (type) {
                case 5:
                    name = '患者申请取消，等待人工处理退款'
                    break
                case 6:
                    name = '医生停诊或取消，等待人工通知'
                    break
                case 7:
                    name = '患者取消，人工处理不予退款'
                    break
                case 8:
                    name = '患者取消，人工退款'
                    break
                case 9:
                    name = '医生停诊或取消，人工通知完成'
                    break
            }
            return name
        }
    }])


    .filter('checkornotType', [function() {
        return function(type) {
            var name
            switch (type) {
                case 0:
                    name = '未审核'
                    break
                case 1:
                    name = '已通过'
                    break
                case 2:
                    name = '已拒绝'
                    break
            }
            return name
        }
    }])
    .filter('leadername', [function() {
        return function(type) {
            var name = ""
            if (type == null) {
                name = null
            } else {
                for (i = 0; i < type.length; i++) {
                    name = name + type[i].name + ' ';
                }
            }
            return name
        }
    }])
    .filter('arraytostring', [function() {
        return function(type) {
            var name = ""
            if (type == null) {
                name = null
            } else {
                for (i = 0; i < type.length; i++) {
                    name = name + type[i].name + ' ';
                }
            }
            return name
        }
    }])
    .filter('realarraytostring', [function() {
        return function(type) {
            var name = ""

            if (type == null) {
                name = null
            } else {
                for (i = 0; i < type.length; i++) {
                    name = name + type[i] + ' ';
                }
            }
            return name
        }
    }])
    .filter('filterAge', [function() {
        return function(date) {
            if (date == null) {
                return ""
            } else {
                var d = new Date(date)
                var dateNow = new Date()
                return dateNow.getFullYear() - d.getFullYear()
            }
        }
    }])

    .filter('hypertension', [function() {
        return function(type) {
            var name = '--'
            switch (type) {
                case '1':
                    name = '是'
                    break
                case '2':
                    name = '否'
                    break
            }
            return name
        }
    }])
    .filter('followuptype', [function() {
        return function(type) {
            var name = '--'
            switch (type) {
                case 0:
                    name = '新建跟踪'
                    break
                case 1:
                    name = '沟通记录'
                    break
                case 2:
                    name = '专员更换'
                    break
                case 3:
                    name = '保单相关'
                    break
            }
            return name
        }
    }])
    .filter('Policytype', [function() {
        return function(type) {
            var name = '--'
            switch (type) {
                case 0:
                    name = '有意向，未安排专员'
                    break
                case 1:
                    name = '有意向，已安排专员'
                    break
                case 2:
                    name = '保单待审核'
                    break
                case 3:
                    name = '保单审核已通过'
                    break
                case 4:
                    name = '保单审核未通过'
                    break
                case 5:
                    name = '保单过期'
                    break
            }
            return name
        }
    }])

    .filter('classname', [function() {
        return function(type) {
            var name
            switch (type) {
                case 'class_2':
                    name = 'CKD1-2期'
                    break
                case 'class_3':
                    name = 'CKD3-4期'
                    break
                case 'class_4':
                    name = 'CDK5期未透析'
                    break
                case 'class_6':
                    name = '腹透'
                    break
                case 'class_5':
                    name = '血透'
                    break
                case 'class_1':
                    name = '肾移植'
                    break
            }
            return name
        }
    }])
    .filter('progressname', [function() {
        return function(type) {
            var name
            switch (type) {
                case 'stage_5':
                    name = '疾病活跃期'
                    break
                case 'stage_6':
                    name = '稳定期'
                    break
                case 'stage_7':
                    name = '>3年'
                    break
            }
            return name
        }
    }])
    .filter('role', [function() {
        return function(type) {
            var name
            switch (type) {
                case 'Leader':
                    name = '地区负责人'
                    break
                case 'master':
                    name = '科主任'
                    break
                case 'doctor':
                    name = '普通医生'
                    break
                case 'patient':
                    name = '患者'
                    break
                case 'nurse':
                    name = '护士'
                    break
                case 'insuranceA':
                    name = '沟通人员'
                    break
                case 'insuranceC':
                    name = '保险主管'
                    break
                case 'insuranceR':
                    name = '录入人员'
                    break
                case 'health':
                    name = '健康专员'
                    break
                case 'admin':
                    name = '管理员'
                    break
            }
            return name
        }
    }])

    .filter('timeFormat', [function() {
        return function(date, format) {
            var d = new Date(date)
            var ret = ''
            if (date == null) { return '-' }
            switch (format) {
                case 'YYYY-MM-DD':
                    ret = d.getFullYear() + '-' + (Array(2).join('0') + (d.getMonth() + 1)).slice(-2) + '-' + (Array(2).join('0') + d.getDate()).slice(-2)
                    break
                case 'MM-DD-YYYY':
                    ret = (Array(2).join('0') + (d.getMonth() + 1).slice(-2)) + '-' + (Array(2).join('0') + d.getDate()).slice(-2) + '-' + d.getFullYear()
                    break
                case 'YYYY-MM-DD h:m':
                    ret = d.getFullYear() + '-' + (Array(2).join('0') + (d.getMonth() + 1)).slice(-2) + '-' + (Array(2).join('0') + d.getDate()).slice(-2) + ' ' + (Array(2).join('0') + d.getHours()).slice(-2) + ':' + (Array(2).join('0') + d.getMinutes()).slice(-2)
                    break
            }
            return ret
        }
    }])
    .filter('chargetype', [function() {
        return function(type) {
            var name
            switch (type) {
                case 1:
                    name = '咨询'
                    break
                case 2:
                    name = '问诊'
                    break
                case 3:
                    name = '咨询升级问诊'
                    break
                case 4:
                    name = '主管医生'
                    break
                case 5:
                    name = '面诊'
                    break
                case 6:
                    name = '加急咨询'
                    break
            }
            return name
        }
    }])
    .filter('diseasetype', [function() {
        return function(type) {
            var name
            switch (type) {
                case 'class_1':
                    name = '肾移植'
                    break
                case 'class_2':
                    name = 'CKD1-2期'
                    break
                case 'class_3':
                    name = 'CKD3-4期'
                    break
                case 'class_4':
                    name = 'CDK5期'
                    break
                case 'class_5':
                    name = '血透'
                    break
                case 'class_6':
                    name = '腹透'
                    break
            }
            return name
        }
    }])
// .filter('role_insurance', [function () {
//   return function (type) {
//     var name
//     switch (type) {
//       case 'insuranceA':
//         name = '沟通人员'
//         break
//       case 'insuranceC':
//         name = '保险主管'
//         break
//       case 'insuranceR':
//         name = '录入人员'
//         break
//     }
//     return name
//   }
// }])