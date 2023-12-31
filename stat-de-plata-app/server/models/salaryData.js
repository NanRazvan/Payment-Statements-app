module.exports = (sequelize, DataType) => {
    let model = sequelize.define('SalaryData', {

        id_salary: {
            type: DataType.INTEGER,
            references: {
              model: 'Salary', 
              key: 'id',       
            },
            onDelete: 'CASCADE',
          },
        id_salary_config: {
            type: DataType.INTEGER
        },
        total: {
            type: DataType.BOOLEAN
        },
        clerk: {
            type: DataType.INTEGER
        },
        contract: {
            type: DataType.INTEGER
        },
        others: {
            type: DataType.INTEGER
        }

    }, {
        timestamps: true
    });

    
    return model;
};
