import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export const BRANCH_MASTER_TABLE_NAME = "tab_branch_master";

@Entity(BRANCH_MASTER_TABLE_NAME)
export class BranchMaster {
  @PrimaryGeneratedColumn()
  branchId!: number;

  @Column("varchar", { length: 100 })
  stateName!: string;

  @Column("varchar", { length: 100 })
  distName!: string;

  @Column("varchar", { length: 100 })
  zoneName!: string;

  @Column("varchar", { length: 100 })
  regionName!: string;

  @Column("varchar", { length: 100 })
  circleName!: string;

  @Column("varchar", { length: 20 })
  branchCode!: string;

  @Column("varchar", { length: 100 })
  branchName!: string;

  @Column()
  status!: boolean;
}
